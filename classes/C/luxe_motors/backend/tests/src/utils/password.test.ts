
import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util";

describe("password.util", () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";

  it("genera hashes no vacíos y diferentes de la contraseña original", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(hash1).toBeTruthy();
    expect(hash1).not.toBe("");
    expect(hash1).not.toBe(password1);

    expect(hash2).toBeTruthy();
    expect(hash2).not.toBe("");
    expect(hash2).not.toBe(password2);
  });

  it("devuelve true con la contraseña correcta", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password1, hash1)).toBe(true);
    expect(await comparePassword(password2, hash2)).toBe(true);
  });

  it("devuelve false con la contraseña incorrecta", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password2, hash1)).toBe(false);
    expect(await comparePassword(password1, hash2)).toBe(false);
  });
});
