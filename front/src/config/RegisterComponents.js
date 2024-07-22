export const UserComponents = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        placeholder: "Prenume",
        errorMessage:
          "Prenume invalid",
        label: "Prenume",
        pattern: "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$",
        required: true,
        alt: false,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Nume",
        errorMessage:
          "Nume invalid",
        label: "Nume",
        pattern: "^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$",
        required: true,
        alt: false,
    },
    {
        id: 3,
        name: "email",
        type: "text",
        placeholder: "Email",
        errorMessage:
          "Email-ul trebuie sa contină caracterul @",
        label: "Email",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
        required: true,
        alt: false,
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "text",
      placeholder: "Număr de telefon",
      errorMessage:
        "Doar cifre",
      label: "Phone Number",
      pattern: "^[0-9]{3,}$",
      required: false,
      alt: false,
    },
    {
        id: 5,
        name: "password",
        type: "password",
        placeholder: "Parolă",
        errorMessage:
          "Minim opt caractere, cel putin o literă mare, o literă mică si o cifră:",
        errorMessageAlt:
          "Parolele nu se potrivesc",
        label: "Password",
        pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
        required: true,
        alt: true,
    },
    {
        id: 6,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirmare Parolă",
        errorMessage:
            "Minim opt caractere, cel putin o literă mare, o literă mică si o cifră:",
        errorMessageAlt:
            "Parolele nu se potrivesc",
        label: "Confirm Password",
        pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
        required: true,
        alt: true,
    }
]