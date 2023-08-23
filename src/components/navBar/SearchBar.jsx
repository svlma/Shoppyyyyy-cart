import React, { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  const ref = useRef(null);
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input placeholder="Search items..." ref={ref} borderRadius={10} />
    </InputGroup>
  );
};

export default SearchBar;
