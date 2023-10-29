<template>
  <div class="container">
    <h1>Student Management</h1>

    <!-- Search and Add Student Button -->
    <div class="d-flex justify-content-between my-3">
      <input type="text" v-model="search" class="form-control w-50" placeholder="Search for students..." />
      <!-- Filter by Class -->
      <div class="row">
        <div class="col">
          <select v-model="selectedClass" class="form-select" aria-label="Select Class">
            <option selected value="">Select Class</option>
            <option v-for="classe in uniqueClasses" :key="classe">{{ classe }}</option>
          </select>
        </div>
      </div>

      <!-- Add Student Icon -->
      <span @click="openModal('', 'add')" title="Add Student" class="material-icons action-icon">person_add</span>
      <!-- Download Students Icon -->
      <span @click="downloadStudents" title="Download Students" class="material-icons action-icon">download</span>
      <!-- Upload Students Icon -->
      <span @click="showFileUpload = !showFileUpload" title="Upload Students" class="material-icons action-icon">upload</span>
    
    
    </div>


    <!-- Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Major</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudents" :key="student._id">
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.major.majorName }}</td>
          <td>{{ student.year.academicYear }}</td>
          <td>
            <button @click="openModal(student, 'edit')" class="btn btn-info btn-sm">Edit</button>
            <button @click="deleteStudent(student._id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Upload Students Modal -->
    <FileUpload v-if="showFileUpload" />
    
    <!-- Add Student Modal -->
    <StudentForm v-if="showModal && mode==='add'" mode="add" :editedData="this.newStudent" :majors="majors" :years="years" @close-modal="closeModal" @add-student="addStudent" />
    
    <!-- Edit Student Modal -->
    <StudentForm v-if="showModal && mode=='edit'" mode="edit" :editedData="this.newStudent" :majors="majors" :years="years" @close-modal="closeModal" @edit-student="editStudent" />
 
    <!-- Modal Backdrop -->

    <!-- Statistics Panel -->
    <div class="statistics-panel mt-5">
      <h3>Student Statistics</h3>
      <!-- Insert some statistics related to students -->
    </div>
  </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify';
import { createStudent } from '@/graphql/mutations'; // Import the generated mutation
import { listStudents } from '@/graphql/queries'; // Import the query for students
import { listMajors } from '@/graphql/queries'; // Import the query for majors
import { listYears } from '@/graphql/queries'; // Import the query for years

import axios from "axios";
import StudentForm from "../components/StudentForm.vue";
import FileUpload from "../components/FileUpload.vue"
export default {
  components: {
    StudentForm, FileUpload
  },
  
  data() {
    return {
      showFileUpload: false,
      selectedClass: '',
      students: [],
      search: "", // for the search bar
      showModal: false,
      mode: '',
      student_id: '',
      
      majors: [],
      years: [],
      
      newStudent: {
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        year: ''
      },
    };
  },
  computed: {
    uniqueClasses() {
      const classes = new Set();
      this.students.forEach(student => {
        if (student.major && student.year) {
          classes.add(`${student.major.majorName} - ${student.year.academicYear}`);
        }
      });
      return Array.from(classes);
    },

    // Computed property to filter students based on search
    filteredStudents() {
      return this.students.filter(student => {
        const matchesSearch =
          student.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
          student.lastName.toLowerCase().includes(this.search.toLowerCase()) ||
          (student.major && student.major.majorName.toLowerCase().includes(this.search.toLowerCase()));

        const matchesClass = !this.selectedClass ||
          (student.major && student.year &&
          `${student.major.majorName} - ${student.year.academicYear}` === this.selectedClass);

        return matchesSearch && matchesClass;
      });
    },
  },
  /*
  async mounted() {
    try {
      const response = await axios.get("http://localhost:1111/api/v1/students");
      this.students = response.data;
    } catch (error) {
      console.error("An error occurred while fetching data: ", error);
    }
    
    try {
      const majorResponse = await axios.get("http://localhost:1111/api/v1/majors");
      this.majors = majorResponse.data;
    } catch (error) {
      console.error("An error occurred while fetching majors: ", error);
    }

    try {
      const yearResponse = await axios.get("http://localhost:1111/api/v1/years");
      this.years = yearResponse.data;
    } catch (error) {
      console.error("An error occurred while fetching years: ", error);
    }

  },
  */

async mounted() {
  try {
    const studentResponse = await API.graphql(graphqlOperation(listStudents));
    this.students = studentResponse.data.listStudents.items;
  } catch (error) {
    console.error("An error occurred while fetching students: ", error);
  }

  try {
    const majorResponse = await API.graphql(graphqlOperation(listMajors));
    this.majors = majorResponse.data.listMajors.items;
  } catch (error) {
    console.error("An error occurred while fetching majors: ", error);
  }

  try {
    const yearResponse = await API.graphql(graphqlOperation(listYears));
    this.years = yearResponse.data.listYears.items;
    } catch (error) {
    console.error("An error occurred while fetching years: ", error);
    }
  },

  methods: {
    openModal(student, mode) {
      this.mode = mode;
      this.showModal = true;

      if (mode == 'edit') {
        this.newStudent = {
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        major: student.major._id,
        year: student.year._id
      }
      this.student_id = student._id;
      }
    },
    
    closeModal(value) {
      this.showModal = value;
      this.newStudent = {
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        year: ''
      }
    },
        
    async addStudent(studentData) {
      try {
        //await axios.post("http://localhost:1111/api/v1/students", studentData);
        await API.graphql(graphqlOperation(createStudent, { input: studentData }));
        // Refresh the students list
        //const response = await axios.get("http://localhost:1111/api/v1/students");
        //this.students = response.data;
        const studentList = await API.graphql(graphqlOperation(listStudents));
        this.students = studentList.data.listStudents.items;
      } catch (error) {
        console.error("An error occurred while adding a new student: ", error);
      }
    },
    
    async editStudent(studentData) {
      try {
        await axios.put(`http://localhost:1111/api/v1/students/${this.student_id}`, studentData);
        // Refresh the students list
        const response = await axios.get("http://localhost:1111/api/v1/students");
        this.students = response.data;
      } catch (error) {
        console.error("An error occurred while editing the student: ", error);
      }
    },
    
    async deleteStudent(id) {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:1111/api/v1/students/${id}`);
        // Refresh the list after deleting
        const response = await axios.get("http://localhost:1111/api/v1/students");
        this.students = response.data;
      } catch (error) {
        console.error("An error occurred while deleting the student: ", error);
        }
      }
    },    
    }
  };
    
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.statistics-panel {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.action-icon {
  cursor: pointer; 
  margin: 0 4px;  /* No margin, but small padding on both sides */
  font-size: 24px;
}


</style>
