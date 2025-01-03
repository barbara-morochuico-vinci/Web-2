interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Text {
  id: number;
  content: string;
  level: string;
}

type NewText = Omit<Text, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Text, NewText };
