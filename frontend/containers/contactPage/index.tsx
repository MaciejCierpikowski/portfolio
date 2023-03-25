import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Input from "../../components/forms/input";
import Error from "../../components/forms/error";

import {
  Wrapper,
  FormWrapper,
  Header,
  Names,
  HeadlineWrapper,
  Headline,
  Line,
  ImageWrapper,
  HeadlineInner,
  InputWrapper,
} from "./style";
import Button from "../../components/button";
import TextArea from "../../components/forms/text-area";
import { useWindowResize } from "../../hooks/useWindowResize";
import { getBreakpoint } from "../../utils/getCurrentBreakPoint";
import ArrowWrapper from "../../components/arrowWrapper";

interface IFormInput {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>({
    mode: "onTouched",
  });

  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.authentication);
  const selectedDate = useAppSelector((state) => state.general.selectedDate);

  const windowSize = useWindowResize();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // dispatch(authenticateUser(data));
  };

  useEffect(() => {
    setValue("message", selectedDate);
  }, [selectedDate]);

  const data = {
    icons: {
      width: {
        isLaptopXL: 60,
        isLaptopL: 60,
        isLaptop: 60,
        isMobileL: 40,
        isMobileM: 40,
      },
      height: {
        isLaptopXL: 60,
        isLaptopL: 60,
        isLaptop: 60,
        isMobileL: 40,
        isMobileM: 40,
      },
    },
    box: {
      width: {
        isLaptopXL: 225,
        isLaptopL: 200,
        isLaptop: 200,
        isMobileL: 105,
        isMobileM: 105,
      },
      height: {
        isLaptopXL: 144,
        isLaptopL: 128,
        isLaptop: 128,
        isMobileL: 64,
        isMobileM: 64,
      },
    },
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>
          <Header>Zapisz się na zajęcia</Header>
          <div>
            <Names>
              <InputWrapper>
                <Input
                  width={100}
                  label="Imię"
                  {...register("name", { required: "To pole jest wymagane" })}
                />
                {errors.name && <Error message={errors.name.message} />}
              </InputWrapper>
              <InputWrapper>
                <Input
                  label="Nawisko"
                  width={100}
                  {...register("surname", {
                    required: "To pole jest wymagane",
                  })}
                />
                {errors.surname && <Error message={errors.surname.message} />}
              </InputWrapper>
            </Names>
            <InputWrapper>
              <Input
                type="text"
                label="Email"
                width={80}
                {...register("email", {
                  required: "To pole jest wymagane",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Niepoprawny format",
                  },
                })}
              />
              {errors.email && <Error message={errors.email.message} />}
            </InputWrapper>

            <InputWrapper>
              <Input
                label="Telefon"
                {...register("phone", {
                  required: "To pole jest wymagane",
                  pattern: {
                    value: /^\d{9}$/,
                    message: "Nieprawidłowy numer telefonu",
                  },
                })}
                width={70}
              />
              {errors.phone && <Error message={errors.phone.message} />}
            </InputWrapper>

            <InputWrapper>
              <TextArea
                label="Wiadomość"
                width={100}
                {...register("message", { required: "To pole jest wymagane" })}
              />
              {errors.message && <Error message={errors.message.message} />}
            </InputWrapper>

            {error && <Error message={error} />}
          </div>

          <Button
            type="submit"
            onClick={() => console.log()}
            sizes={{
              widthMobile: 200,
              heightMobile: 50,
              widthDesktop: 200,
              heightDesktop: 70,
            }}
          >
            Wyślij
          </Button>
        </FormWrapper>
      </form>
      <HeadlineWrapper>
        <ImageWrapper
          leftPosition="0.5vw"
          bottomPosition="170px"
          leftPositionMobile="13vw"
          bottomPositionMobile="30%"
          width={data.icons.width[getBreakpoint(windowSize[0])!]}
          height={data.icons.height[getBreakpoint(windowSize[0])!]}
          type="icons"
        >
          <Image
            alt="post_box_icons"
            src="/assets/contact_icons.png"
            width={data.icons.width[getBreakpoint(windowSize[0])!]}
            height={data.icons.height[getBreakpoint(windowSize[0])!]}
          />
        </ImageWrapper>

        <ImageWrapper
          leftPosition="2.5vw"
          bottomPosition="62px"
          leftPositionMobile="70vw"
          bottomPositionMobile="21%"
          width={data.box.width[getBreakpoint(windowSize[0])!]}
          height={data.box.height[getBreakpoint(windowSize[0])!]}
          type="post_box"
        >
          <Image
            alt="post_box"
            src="/assets/contact_post.png"
            width={data.box.width[getBreakpoint(windowSize[0])!]}
            height={data.box.height[getBreakpoint(windowSize[0])!]}
          />
        </ImageWrapper>
        <HeadlineInner>
          <Line />

          <Headline>Kontakt</Headline>
        </HeadlineInner>
      </HeadlineWrapper>
      <ArrowWrapper />
    </Wrapper>
  );
};

export default ContactPage;
