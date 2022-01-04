import styled from "styled-components";

export const RegisterFormComponent = styled.div`
  width: clamp(250px, 100%, 450px);
  height: clamp(850px, 80%, 850px);
  background-color: #ffffff;
  padding: 4rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h1 {
    cursor: default;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-data {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .container {
        display: flex;
        flex-direction: column;

        label {
          cursor: pointer;
          font-weight: 400;
          font-size: var(--font-size-1);
        }

        .input-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid grey;

          .icon {
            color: rgb(var(--font-color-dark-1));
            font-size: 2rem;

            &.show-password {
              cursor: pointer;
            }
          }

          input {
            width: 100%;
            border: none;
            outline: none;
            padding: 1rem;

            &:invalid {
              &:not(:placeholder-shown) {
                border-left: 2px solid red;
              }
            }

            &:valid {
              &:not(:placeholder-shown) {
                border-left: 2px solid green;
              }
            }
          }
        }
      }
    }

    button {
      font-size: var(--font-size-4);
      margin-top: 5rem;
      width: 100%;
      padding: 1rem;
      border-radius: 5rem;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: rgb(var(--background-color-dark-1));
      color: rgb(var(--font-color-bright-2));
      transition: all 0.2s ease-in-out;

      &:hover:enabled {
        transform: scale(1.05);
      }

      &:active:enabled {
        transform: scale(0.95);
      }
    }

    .server-error {
      margin-top: 2rem;
      color: rgb(var(--font-color-error));
      font-size: var(--font-size-2);
    }

    .server-message {
      margin-top: 2rem;
      color: rgb(var(--font-color-success));
      font-size: var(--font-size-1);
    }
  }

  .social-media-signup {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    p {
      cursor: default;
      color: rgb(var(--font-color-dark-2));
      font-weight: 400;
      font-size: var(--font-size-2);
    }

    .social-medias {
      display: flex;
      align-items: center;
      gap: 1rem;

      div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .icon {
          color: white;
          font-size: var(--font-size-4);
        }

        &.facebook {
          background-color: #1341a5;
        }

        &.twitter {
          background-color: #0f99e9;
        }

        &.google {
          background-color: #b92d40;
        }
      }
    }
  }

  .sign-up {
    margin-top: 4rem;

    p {
      cursor: pointer;
      color: rgb(var(--font-color-dark-2));
      font-weight: 400;
      font-size: var(--font-size-2);
      text-decoration: underline;
    }
  }
`;
