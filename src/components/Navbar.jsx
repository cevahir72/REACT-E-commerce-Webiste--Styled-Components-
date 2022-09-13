import React from 'react'
import styled from "styled-components"


const Container = styled.div`
    height:60px;
    backgroundColor: black;
    `

const Wrapper = styled.div`
    padding:10px 20px
    `

const Navbar = () => {
  return (
    <Container styled={{color:"red"}}>
        Navbar
    </Container>
  )
}

export default Navbar