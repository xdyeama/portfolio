import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImg = `/images/logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={50} height={50} alt="logo" />
          <Text mt={5}
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="900"
            ml={3}
          >
            Barlykov Beket
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo