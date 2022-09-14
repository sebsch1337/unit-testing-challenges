function greet(name) {
  if (name === "Stefan" || name === "Felix" || name === "Thomas")
    return "Howdy Coach!";

  if (name === "Dalia") return "Howdy Boss!";

  return `Howdy ${name}!`;
}

export { greet };
