import { StyledPageHeading, Text, Icon } from "./styles";
import { Add, ArrowBackIos } from "@material-ui/icons";
import { useRouter } from "next/router";

interface Props {
  text?: string;
  backIcon?: boolean;
  plusIcon?: boolean;
}

const PageHeading = ({ text, backIcon, plusIcon }: Props) => {
  const router = useRouter();

  return (
    <StyledPageHeading>
      <Text onClick={() => router.back()}>
        {backIcon && <ArrowBackIos />}

        <h3>{text}</h3>
      </Text>

      {plusIcon && (
        <Icon onClick={() => router.push(`/${text?.toLowerCase()}/create`)}>
          <Add />
        </Icon>
      )}
    </StyledPageHeading>
  );
};

export default PageHeading;
