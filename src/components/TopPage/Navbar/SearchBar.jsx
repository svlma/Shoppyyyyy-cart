import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = ({ query, setQuery }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setQuery(value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search items..."
          _placeholder={{ color: "white" }}
          borderColor="white"
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
