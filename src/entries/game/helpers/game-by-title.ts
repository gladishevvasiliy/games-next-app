import { Game } from "../types";

export const gameByName = (items: Game[], name: string) => items.find(item => item.seo_title === name)
