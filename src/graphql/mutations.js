/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      majorID
      yearID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      majorID
      yearID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      majorID
      yearID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMajor = /* GraphQL */ `
  mutation CreateMajor(
    $input: CreateMajorInput!
    $condition: ModelMajorConditionInput
  ) {
    createMajor(input: $input, condition: $condition) {
      id
      majorName
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMajor = /* GraphQL */ `
  mutation UpdateMajor(
    $input: UpdateMajorInput!
    $condition: ModelMajorConditionInput
  ) {
    updateMajor(input: $input, condition: $condition) {
      id
      majorName
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMajor = /* GraphQL */ `
  mutation DeleteMajor(
    $input: DeleteMajorInput!
    $condition: ModelMajorConditionInput
  ) {
    deleteMajor(input: $input, condition: $condition) {
      id
      majorName
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createYear = /* GraphQL */ `
  mutation CreateYear(
    $input: CreateYearInput!
    $condition: ModelYearConditionInput
  ) {
    createYear(input: $input, condition: $condition) {
      id
      academicYear
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateYear = /* GraphQL */ `
  mutation UpdateYear(
    $input: UpdateYearInput!
    $condition: ModelYearConditionInput
  ) {
    updateYear(input: $input, condition: $condition) {
      id
      academicYear
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteYear = /* GraphQL */ `
  mutation DeleteYear(
    $input: DeleteYearInput!
    $condition: ModelYearConditionInput
  ) {
    deleteYear(input: $input, condition: $condition) {
      id
      academicYear
      Students {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
