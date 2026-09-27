export interface GalleryPhoto {
  src: string;
  caption: string;
}

const base = import.meta.env.BASE_URL;

export const hack4sdgInfo = {
  title: "HACK4SDG Ideathon",
  date: "September 26, 2026",
  venue: "RV College of Engineering, Bengaluru",
  tagline: "Ideas pitched. Prototypes judged. Builders celebrated.",
  description:
    "HACK4SDG is Accelerate's ideathon where student teams pitch technology-driven solutions mapped to the UN Sustainable Development Goals. Teams presented working prototypes and slide decks to a judging panel — from lost-and-found networks and green-shift infrastructure ideas to AI-assisted learning tools — followed by an open Q&A with the audience.",
};

export const hack4sdgPhotos: GalleryPhoto[] = [
  { src: `${base}events/hack4sdg/01-group.jpg`, caption: "HACK4SDG cohort — group photo" },
  { src: `${base}events/hack4sdg/02-opening.jpg`, caption: "Opening presentations" },
  { src: `${base}events/hack4sdg/03-meet-the-team.jpg`, caption: "Team introductions" },
  { src: `${base}events/hack4sdg/04-pitch.jpg`, caption: "Pitching the prototype" },
  { src: `${base}events/hack4sdg/05-whiteboard.jpg`, caption: "Whiteboard deep-dive" },
  { src: `${base}events/hack4sdg/06-solo-pitch.jpg`, caption: "Solo pitch" },
  { src: `${base}events/hack4sdg/07-team-presenting.jpg`, caption: "Team presentation + audience Q&A" },
  { src: `${base}events/hack4sdg/08-lost-cards.jpg`, caption: "Lost-and-found network pitch" },
  { src: `${base}events/hack4sdg/09-hacking.jpg`, caption: "Teams at work on laptops" },
  { src: `${base}events/hack4sdg/10-blue-team.jpg`, caption: "Finalist presentation" },
  { src: `${base}events/hack4sdg/11-greenshift.jpg`, caption: "GreenShift — smart infrastructure pitch" },
  { src: `${base}events/hack4sdg/12-briefing.jpg`, caption: "Briefing the room" },
];
