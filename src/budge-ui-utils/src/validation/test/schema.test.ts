import { BuildValidationSchema, DateSchema, EndDateSchema, PhoneSchema, SSNSchema } from "../schemas";

const ssnSchema = BuildValidationSchema({
  ssn: SSNSchema().required(),
});

const phoneSchema = BuildValidationSchema({
  phone: PhoneSchema().required(),
});

const dateSchema = BuildValidationSchema({
  date: DateSchema().required(),
});

const startEndDateSchema = BuildValidationSchema({
  startDate: DateSchema().required(),
  endDate: EndDateSchema("startDate").required(),
});

describe("Testing validation schemas", () => {
  test("Valid SSN", async () => {
    const resp = await ssnSchema.isValid({
      ssn: "123121234",
    });
    expect(resp).toBe(true);
  });

  test("Invalid SSN All 0", async () => {
    try {
      await ssnSchema.isValid({
        ssn: "000000000",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid SSN starting with 0", async () => {
    try {
      await ssnSchema.isValid({
        ssn: "000121233",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid SSN ending with 0", async () => {
    try {
      await ssnSchema.isValid({
        ssn: "123120000",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid Date month", async () => {
    try {
      await dateSchema.isValid({
        date: "99/12/2022",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid Date format", async () => {
    try {
      await dateSchema.isValid({
        date: "99-12-2022",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid Date Value For Month", async () => {
    try {
      await dateSchema.isValid({
        date: "02/31/2020",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Invalid Date Value", async () => {
    try {
      await dateSchema.isValid({
        date: "1",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Valid Date", async () => {
    const resp = await dateSchema.isValid({
      date: "08/12/2022",
    });
    expect(resp).toBe(true);
  });

  test("Invalid End Date", async () => {
    try {
      await startEndDateSchema.isValid({
        startDate: "08/12/2022",
        endDate: "08/12/2021",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Valid End Date", async () => {
    const resp = await startEndDateSchema.isValid({
      startDate: "08/12/2022",
      endDate: "08/12/2023",
    });
    expect(resp).toBe(true);
  });

  test("Invalid Phone", async () => {
    try {
      await phoneSchema.isValid({
        phone: "51455abd55",
      });
    } catch (e) {
      expect(e).toBe("error");
    }
  });

  test("Valid Phone with parenthese and dash", async () => {
    const result = await phoneSchema.isValid({
      phone: "(514) 668-5556",
    });
    expect(result).toBe(true);
  });

  test("Valid Phone without parenthese and dash", async () => {
    const result = await phoneSchema.isValid({
      phone: "5146685556",
    });
    expect(result).toBe(true);
  });
});
