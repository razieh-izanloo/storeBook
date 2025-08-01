  export const submitFormLogin = async (email: string, password: string) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      return data.status;    
  };

   export const messages: Record<number, { text: string; type: string }> = {
      200: { text: "success", type: "success" },
      401: { text: "incorrectPass", type: "error" },
      500: {
        text: "problemServer",
        type: "error",
      },
    };