/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const studentsByMajorID = /* GraphQL */ `
  query StudentsByMajorID(
    $majorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByMajorID(
      majorID: $majorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const studentsByYearID = /* GraphQL */ `
  query StudentsByYearID(
    $yearID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByYearID(
      yearID: $yearID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const searchStudents = /* GraphQL */ `
  query SearchStudents(
    $filter: SearchableStudentFilterInput
    $sort: [SearchableStudentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableStudentAggregationInput]
  ) {
    searchStudents(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getMajor = /* GraphQL */ `
  query GetMajor($id: ID!) {
    getMajor(id: $id) {
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
export const listMajors = /* GraphQL */ `
  query ListMajors(
    $filter: ModelMajorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMajors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        majorName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchMajors = /* GraphQL */ `
  query SearchMajors(
    $filter: SearchableMajorFilterInput
    $sort: [SearchableMajorSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMajorAggregationInput]
  ) {
    searchMajors(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        majorName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getYear = /* GraphQL */ `
  query GetYear($id: ID!) {
    getYear(id: $id) {
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
export const listYears = /* GraphQL */ `
  query ListYears(
    $filter: ModelYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        academicYear
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchYears = /* GraphQL */ `
  query SearchYears(
    $filter: SearchableYearFilterInput
    $sort: [SearchableYearSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableYearAggregationInput]
  ) {
    searchYears(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        academicYear
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
