/* Core */
import React from "react";
import { Provider } from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/* Components */
import { RegistrationForm } from "../components/RegistrationForm";
import { StudentRegistration } from "../components/StudentRegistration";

/* Store */
import { store } from "../../../init/store";

describe("Student Registration", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <StudentRegistration />
      </Provider>
    );
  });
});

describe("Registration Form render end submit", () => {
  it("should render without crashing", () => {
    const onSubmit = jest.fn();
    render(<RegistrationForm onSubmit={onSubmit} />);
  });

  it("should submit with correct values", async () => {
    const onSubmit = jest.fn();
    render(<RegistrationForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByLabelText(/First name/i), "Sasha");
    userEvent.type(screen.getByLabelText(/Surname/i), "Maslennikova");
    userEvent.paste(
      screen.getByLabelText(/Email/i),
      "alex.maslennikova19@gmail.com"
    );
    userEvent.paste(screen.getByLabelText(/Age/i), "30");
    userEvent.selectOptions(screen.getByLabelText(/Specialty/i), ["developer"]);
    userEvent.click(screen.getByLabelText(/Female/i));
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith(
        {
          firstName: "Sasha",
          surname: "Maslennikova",
          email: "alex.maslennikova19@gmail.com",
          age: 30,
          specialty: "developer",
          sex: "female",
        },
        expect.anything()
      )
    );
  });
});

describe("Registration Form validation", () => {
  beforeEach(() => {
    const onSubmit = jest.fn();
    render(<RegistrationForm onSubmit={onSubmit} />);
  });
  it("should validate first name", async () => {
    userEvent.type(screen.getByLabelText(/First name/i), "");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("First name is required")).toBeInTheDocument();
    });
  });
  it("should validate surname", async () => {
    userEvent.type(screen.getByLabelText(/Surname/i), "");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Surname is required")).toBeInTheDocument();
    });
  });

  it("should validate empty email", async () => {
    userEvent.type(screen.getByLabelText(/Email/i), "");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });

  it("should validate incorrect email", async () => {
    userEvent.type(screen.getByLabelText(/Email/i), "test");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Should be a valid email")).toBeInTheDocument();
    });
  });

  it("should validate minimum age", async () => {
    userEvent.type(screen.getByLabelText(/Age/i), "3");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Minimum age is 6")).toBeInTheDocument();
    });
  });

  it("should validate maximum age", async () => {
    userEvent.paste(screen.getByLabelText(/Age/i), "70");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Maximum age is 60")).toBeInTheDocument();
    });
  });

  it("should validate specialty", async () => {
    userEvent.selectOptions(screen.getByLabelText(/Specialty/i), [""]);
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Specialty is required")).toBeInTheDocument();
    });
  });

  it("should validate sex", async () => {
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText("Sex is required")).toBeInTheDocument();
    });
  });
});
