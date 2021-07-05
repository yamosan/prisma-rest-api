import { spawn } from "child_process";

export default async function () {
  if (process.env.NODE_ENV === "test") {
    await new Promise((resolve, reject) => {
      const process = spawn("prisma", ["migrate", "reset", "--force", "--skip-generate", "--skip-seed"]);
      process.on("close", (code) => {
        if (code === 0) {
          resolve(0);
        } else {
          reject(code);
        }
      });
    });
  }
}
