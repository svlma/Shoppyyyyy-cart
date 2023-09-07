// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
// import React, { useRef } from "react";
// import { BsSearch } from "react-icons/bs";

// const SearchBar = () => {
//   const inputRef = useRef(null);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const value = inputRef.current.value;
//     if (value === "") return;
//     setItems((prev) => {
//       return [...prev, value];
//     });
//     inputRef.current.value = "";
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <InputGroup>
//           <InputLeftElement children={<BsSearch />} />
//           <Input
//             placeholder="Search items..."
//             ref={inputRef}
//             borderRadius={10}
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </InputGroup>
//       </form>
//     </>
//   );
// };

// export default SearchBar;

import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = ({ query, setQuery }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    // Update the query in the parent component (NavBar)
    setQuery(value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search items..."
          ref={inputRef}
          borderRadius={10}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
