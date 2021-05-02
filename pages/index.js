import ResponsiveDrawerLayout from '../components/ResponsiveDrawerLayout';
import { gql, useLazyQuery } from "@apollo/client";

const CHARACTER_QUERY = gql`
  query queryCharacter($search: String!) {
    Character (search: $search) {
      name {
        full
        native
      }
      image {
        medium
      } 
    }
  }
`;

const STAFF_QUERY = gql`
  query queryStaff($search: String!) {
    Staff (search: $search) {
      name {
        full
        native
      }
      image {
        medium
      }
    }
  }
`;

export default function Home() {

  const [getCharacter, characterResult] = useLazyQuery(CHARACTER_QUERY);
  const [getStaff, staffResult] = useLazyQuery(STAFF_QUERY);
  
  return (
    <ResponsiveDrawerLayout>
       {characterResult.data && characterResult.data.Character &&
    <div>
      <div>{characterResult.data.Character.name.full}</div>
      <div>{characterResult.data.Character.name.native}</div>
      <img src={characterResult.data.Character.image.medium} alt=""/>
    </div>
    }
    <button onClick={() => getCharacter({ variables: { search: 'D' } })}>
      search for "D"
    </button>
    {staffResult.data && staffResult.data.Staff &&
    <div>
      <div>{staffResult.data.Staff.name.full}</div>
      <div>{staffResult.data.Staff.name.native}</div>
      <img src={staffResult.data.Staff.image.medium} alt=""/>
    </div>
    }
    <button onClick={() => getStaff({ variables: { search: "中村" } })}>
      search for "中村"
    </button>
    </ResponsiveDrawerLayout>
  )
}
