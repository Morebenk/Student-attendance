/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateMajor = /* GraphQL */ `
  subscription OnCreateMajor($filter: ModelSubscriptionMajorFilterInput) {
    onCreateMajor(filter: $filter) {
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
export const onUpdateMajor = /* GraphQL */ `
  subscription OnUpdateMajor($filter: ModelSubscriptionMajorFilterInput) {
    onUpdateMajor(filter: $filter) {
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
export const onDeleteMajor = /* GraphQL */ `
  subscription OnDeleteMajor($filter: ModelSubscriptionMajorFilterInput) {
    onDeleteMajor(filter: $filter) {
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
export const onCreateYear = /* GraphQL */ `
  subscription OnCreateYear($filter: ModelSubscriptionYearFilterInput) {
    onCreateYear(filter: $filter) {
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
export const onUpdateYear = /* GraphQL */ `
  subscription OnUpdateYear($filter: ModelSubscriptionYearFilterInput) {
    onUpdateYear(filter: $filter) {
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
export const onDeleteYear = /* GraphQL */ `
  subscription OnDeleteYear($filter: ModelSubscriptionYearFilterInput) {
    onDeleteYear(filter: $filter) {
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
