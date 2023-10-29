<template>
  {{ updateData }}        
  <div class="modal show d-block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Student</h5>
          <button type="button" class="btn-close" @click="closeModel" data-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addStudent">

            <div class="mb-3" :class="{ 'has-error': firstNameError && studentData.firstName }">
              <label class="form-label">First Name</label>
              <input type="text" v-model="studentData.firstName" class="form-control" />
              <p v-if="firstNameError && studentData.firstName" class="error-text">{{ firstNameError }}</p>
            </div>

            <div class="mb-3" :class="{ 'has-error': lastNameError && studentData.lastName }">
              <label class="form-label">Last Name</label>
              <input type="text" v-model="studentData.lastName" class="form-control" />
              <p v-if="lastNameError && studentData.lastName" class="error-text">{{ lastNameError }}</p>
            </div>
            
            <div class="email-input-wrapper mb-3" :class="{ 'has-error': !isValidEmail && emailPrefix }">
              <label class="form-label">Email</label>
              <div class="input-with-suffix">
                <input type="text" class="form-control" v-model="emailPrefix">
                <span class="email-suffix" v-if="showSuffix">@ump.ac.ma</span>
              </div>
              <p v-if="!isValidEmail && emailPrefix" class="error-text">Please enter a valid email.</p>
            </div>

            <div class="mb-3">
            <label class="form-label">Major</label>
            <select v-model="studentData.major" class="form-control custom-select-arrow" required>
              <option v-for="major in majors" :key="major._id" :value="major._id">
                {{ major.majorName }}
              </option>
            </select>
            </div>

            <div class="mb-3">
              <label class="form-label">Year</label>
              <select v-model="studentData.year" class="form-control custom-select-arrow" required>
                <option v-for="year in years" :key="year._id" :value="year._id">
                  {{ year.academicYear }}
                </option>
              </select>
            </div>
            
            <button type="submit" @click="submitForm" class="btn btn-primary">{{ buttonText }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-backdrop"></div>

</template>

<script>
export default {
  props: {
    editedData: {
      type: Object,
      default: {
        firstName: '',
        lastName: '',
        email: '',
        major: '',
        year: ''
      }
    },
    mode: {
      type: String,
      required: true
    },
    majors: {
      type: Array,
      required: true
    },
    years: {
      type: Array,
      required: true
    }
  },
  emits: ['close-modal', 'add-student', 'edit-student'],  // Declare the custom event here
  data () {
    return {
      studentData: Object,
      emailPrefix: '' 
    }
  },
  computed: {    
    updateData() {
      this.studentData = this.editedData;

      const emailParts = this.editedData.email.split('@');
      if (emailParts[1] === 'ump.ac.ma') {
        this.emailPrefix = emailParts[0];
      } else {
        this.emailPrefix = this.editedData.email;
      }
    },
    buttonText() {
      return this.mode === 'add' ? 'Add Student' : 'Edit Student';
    },
    fullEmail() {
      if (this.emailPrefix.includes('@')) {
        return this.emailPrefix;
      }
      return this.emailPrefix + '@ump.ac.ma';
    },
    showSuffix() {
      return !this.emailPrefix.includes('@');
    },
    isValidEmail() {
      const pattern = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*$/;
      if (pattern.test(this.emailPrefix)) {
        return true;
      } else {
        return false;
      }
    },
    
    firstNameError() {
    if (!this.studentData.firstName) {
      return 'First name is required';
    }
    if (this.studentData.firstName.length < 3) {
      return 'First name must be at least 3 characters long';
    }
    if (this.studentData.firstName.length > 30) {
      return 'First name must not exceed 30 characters';
    }
    if (!/^[a-zA-Z ,.'-]+$/i.test(this.studentData.firstName)) {
      return 'First name contains invalid characters';
    }
    return null;
  },
  lastNameError() {
    if (!this.studentData.lastName) {
      return 'Last name is required';
    }
    if (this.studentData.lastName.length < 3) {
      return 'Last name must be at least 3 characters long';
    }
    if (this.studentData.lastName.length > 30) {
      return 'Last name must not exceed 30 characters';
    }
    if (!/^[a-zA-Z ,.'-]+$/i.test(this.studentData.lastName)) {
      return 'Last name contains invalid characters';
    }
    return null;
    }
  },  
  
  methods: {
    closeModel() {
      this.$emit('close-modal', false)
      
    },
    submitForm() {
    // If the form is valid, proceed with the API call or whatever action is necessary
    this.studentData.email = this.fullEmail;
    if (this.mode === 'add') {
      this.$emit('add-student', this.studentData);
      this.closeModel();
    } else if (this.mode === 'edit') {
      this.$emit('edit-student', this.studentData);
      this.closeModel();
    }
  }
}
}


</script>

<style scoped>

.custom-select-arrow {
  appearance: none; /* Remove default appearance */
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5rem;
  cursor: pointer;
}

.email-input-wrapper {
  position: relative;
}

.input-with-suffix {
  position: relative;
}

.email-suffix {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  opacity: 0.5;
}

/* General styling for form controls with errors */
.has-error .form-control {
  border-color: #e3342f; /* Red border */
  box-shadow: 0 0 0 0.2rem rgba(227, 52, 47, 0.25); /* Red glow */
}

/* Styling for error text */
.error-text {
  color: #e3342f; /* Red text */
  font-size: 0.875rem; /* Slightly smaller than normal text */
  margin-top: 0.25rem; /* Add some spacing between the input and error text */
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: 1;
}

.custom-select-arrow {
  appearance: none; /* Remove default appearance */
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5rem;
  cursor: pointer;
}
</style>