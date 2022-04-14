import React from 'react'
import { Container } from "@mui/material";
import Members from "../components/Members"

const Members = () => {
    const members = [{id:1, name:"leandro", rol:"regular", email:"leandro@gmail.com"}, {id:2,name:"marcelo", rol:"admin", email:"leandro12345678910@gmail.com"}]
  return (
    <Container>
      <div className="flex justify-center items-center">
      <Members members={members}/>
      </div>
    </Container>
  )
}

export default Members