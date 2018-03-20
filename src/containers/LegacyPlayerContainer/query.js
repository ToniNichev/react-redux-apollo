import gql from 'graphql-tag';

const query = gql`
  query toniTest($id:ID!) {
    section(id: $id, pageSize: 3) {
      url
      type
      title 
      sectionLabel
      logo {
        url
      }
      shorterHeadline
      assets {
        ...on event {
          startDate
        }
        id
        type
        url
        datePublished
        title
        linkHeadline
        shorterHeadline
        slug
        subType
        sectionHierarchy {
          tagName
        }
        promoImage {
          url
        }
        author {
          name
        }
        creatorOverwrite
          sourceOrganization {
          name
          }
      } 
      }
  }
`;

export default query;
