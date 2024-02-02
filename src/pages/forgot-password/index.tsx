import CenteredGrid from "@/components/containers/CenteredGrid";
import TextFormField from "@/components/inputfields/TextFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const defaultValues = {
  email: "",
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    console.log("submitted");
    router.push("/reset-password");
  }

  function handleBack() {
    router.back();
  }

  return (
    <CenteredGrid sx={{ height: "100%", width: "100%" }}>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        minWidth={400}
        justifyContent={"center"}
      >
        <Grid
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={2}
        >
          <Grid display={"flex"} flexDirection={"column"} gap={2}>
            <Typography fontWeight={500} fontSize={23}>
              Forgot Password
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Please sign-in to your account
            </Typography>
          </Grid>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid display={"flex"} flexDirection={"column"} gap={2} mt={1}>
              <TextFormField
                type="email"
                control={control}
                id="email"
                error={errors?.email}
                placeholder="example@mail.com"
                label="Email"
                size="medium"
              />
              <Grid display={"flex"} flexDirection={"column"} gap={1}>
                <Button fullWidth variant="contained" type="submit">
                  Submit
                </Button>
                <Button onClick={handleBack} fullWidth variant="outlined">
                  Return To Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </CenteredGrid>
  );
};

export default ForgotPassword;
