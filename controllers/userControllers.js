import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../services/userServices.js";

export async function register(req, res) {
  const { email, password } = req.body;

  const result = await registerUser(email, password);

  if (result.error) {
    return res
      .status(result.error.status)
      .json({ message: result.error.message });
  }

  res.status(201).json(result);
}

export async function login(req, res) {
  const { email, password } = req.body;

  const result = await loginUser(email, password);

  if (result.error) {
    return res
      .status(result.error.status)
      .json({ message: result.error.message });
  }

  res.status(200).json(result);
}

export async function logout(req, res) {
  const user = req.user;
  const result = await logoutUser(user);

  if (result.error) {
    return res
      .status(result.error.status)
      .json({ message: result.error.message });
  }

  return res.status(result.status).send();
}

export async function current(req, res) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }

  return res.status(200).json({
    email: user.email,
    subscription: user.subscription,
  });
}
