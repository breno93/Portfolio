import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper id="social-media">
      <Container>
        <Flex>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"70px"}
            height={"70px"}
          />
          <Box css={{ marginLeft: "$2" }}>
            <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
              Sobre mim {/* <HandEffect /> */}
            </Text>
            <Text type="body1" color="grey2">
              Opaa! Beleza? Muito prazer! Sou um viajante no mundo dos códigos
              tentando aprender cada dia um pouquinho mais xD. Minha experiência
              abrange o desenvolvimento web e móvel. Acredito no poder do
              trabalho em equipe e na entrega de produtos de qualidade.
              <br />
              Como todo bom Dev curto uma jogatina com os amigos, assistir
              séries e filmes.
            </Text>
          </Box>
        </Flex>
        {/* <Flex
          css={{
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "$2",
          }}
        >
          <Button
            className="instagram"
            type="circle"
            as="a"
            target="_blank"
            href={`https://instagram.com/${userData.instagramUser}`}
          >
            <FaInstagram />
          </Button>
          <Button
            className="facebook"
            type="circle"
            as="a"
            target="_blank"
            href={`https://fb.com/${userData.facebookUser}`}
          >
            <FaFacebookF />
          </Button>
          <Button
            className="linkedin"
            type="circle"
            as="a"
            target="_blank"
            href={`https://linkedin.com/in/${userData.linkedinUser}`}
          >
            <FaLinkedinIn />
          </Button>
        </Flex> */}
      </Container>
    </FooterWrapper>
  );
};
