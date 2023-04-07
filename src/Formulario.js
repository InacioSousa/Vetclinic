import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Switch,
} from "@chakra-ui/react";

function Formulario(){
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [castrado, setCastrado] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [anamnese, setAnamnese] = useState("");
  const [sexo, setSexo] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleRacaChange(event) {
    setRaca(event.target.value);
  }

  function handleIdadeChange(event) {
    setIdade(event.target.value);
  }

  function handleCastradoChange(event) {
    setCastrado(event.target.value);
  }

  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }

  function handleCelularChange(event) {
    setCelular(event.target.value);
  }

  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }

  function handleCidadeChange(event) {
    setCidade(event.target.value);
  }

  function handleAnamneseChange(event) {
    setAnamnese(event.target.value);
  }

  function handleSexoChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "Masc" || selectedValue === "Fem") {
      setSexo(selectedValue);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Aqui você pode fazer algo com os valores dos estados, como enviar para um servidor ou armazená-los em outro lugar
  }

  function checkButtonDisabled() {
    const inputs = [nome, raca, idade, castrado, telefone, celular, endereco, cidade, anamnese, sexo];
    const emptyInputs = inputs.filter(input => input === "");
    if (emptyInputs.length === 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  useEffect(() => {
    checkButtonDisabled();
  }, [nome, raca, idade, castrado, telefone, celular, endereco, cidade, anamnese, sexo]);

 

  return(
  <Box h="100vh">
  <Center
  as="header"
  h={150}
  bg="teal.500"
  color="white"
  fontWeight="bold"
  fontSize="4xl"
  pb="8"
  >
    Dados do Paciente
  </Center>
  <Flex
  align="center"
  justify="center"
  bg="blackAlpha.200"
  h="calc(100vh - 150px)"
  >
    <Center
    w="100%"
    maxW={840}
    bg="white"
    top={100}
    position="absolute"
    borderRadius={5}
    p="6"
    boxShadow="0 1px 2px #ccc"
    >
      <FormControl display="flex" flexDir="column" gap="4">

      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="nome"> Nome do pet</FormLabel>
            <Input id="nome" value={nome} onChange={handleNomeChange}/>
        </Box>
        <Box w="100%">
          <FormLabel htmlFor="nome"> Raça</FormLabel>
            <Input id="raça" value={raca} onChange={handleRacaChange}/>
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="idade">Idade</FormLabel>
          <Input id="idade" type="number" value={idade} onChange={handleIdadeChange} />
        </Box>
        <Box w="100%">
          <FormLabel htmlFor="castrado">Castrado?</FormLabel>
          <Input id="castrado" value={castrado} onChange={handleCastradoChange} />
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="telefone">Telefone</FormLabel>
          <Input id="telefone" type="number" value={telefone} onChange={handleTelefoneChange} />
        </Box>
        <Box w="100%">
          <FormLabel htmlFor="celular">Celular</FormLabel>
            <Input id="celular" type="number" value={celular} onChange={handleCelularChange} />
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="endereco">Endereço</FormLabel>
          <Input id="endereco" value={endereco} onChange={handleEnderecoChange} />
        </Box>
        <Box w="100%">
          <FormLabel htmlFor="cidade">Cidade</FormLabel>
            <Input id="cidade" value={cidade} onChange={handleCidadeChange} />
        </Box>
      </HStack>
      <HStack spacing="4">
        <Box w="100%">
          <FormLabel htmlFor="anamnese">ANAMNESE</FormLabel>
          <Input id="anamnese" type="textarea" value={anamnese} onChange={handleAnamneseChange} />
        </Box>
        </HStack>

        <HStack spacing="4">
        <Box w="100%">
          <FormLabel >Sexo</FormLabel>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio defaultChecked value="Masc">Masc</Radio>
              <Radio value="Fem">Fem</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </HStack>

        <HStack justify="center">
          <Button
          w={240}
          p="6"
          bg="teal.600"
          color="white"
          fontWeight="bold"
          fontSize="xl"
          mt="2"
          _hover={{bg: "teal.800" }}
          type="subimit" 
          disabled={isButtonDisabled}

          >
            Enviar
          </Button>
        
      </HStack>

      </FormControl>
    </Center>
  </Flex>
</Box>
)
}

export default Formulario;