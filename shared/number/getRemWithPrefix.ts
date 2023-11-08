import getRem from "./getRem";

export default function getRemWithPrefix(px: number): string {
    return `${getRem(px)}rem`;
}