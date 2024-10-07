type Verses = {
    chapter: number;
    verse: number;
    name: string;
    text: string;
}

type BibleChapterResponse = {
    name: string; // chapter name with chapter number
    translation: string;
    verses: Verses[];
}
