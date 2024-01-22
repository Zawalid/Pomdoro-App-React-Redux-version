import beepSound from "../../assets/sounds/beep.mp3";
import digitalSound from "../../assets/sounds/digital.mp3";
import kitchenSound from "../../assets/sounds/kitchen.mp3";
import clickSound from "../../assets/sounds/click.mp3";
import slowTickingSound from "../../assets/sounds/slowTicking.mp3";
import fastTickingSound from "../../assets/sounds/fastTicking.mp3";

export const sounds = {
  // Alarm
  Beep: new Audio(beepSound),
  Digital: new Audio(digitalSound),
  Kitchen: new Audio(kitchenSound),
  // Ticking
  None: null,
  "Slow Ticking": new Audio(slowTickingSound),
  "Fast Ticking": new Audio(fastTickingSound),
  // Click
  Click: new Audio(clickSound),
};

export function playSound(sound) {
  stopAllSounds();
  if (sounds[sound]) {
    sounds[sound].play();
  }
}

export function stopAllSounds() {
  Object.keys(sounds).forEach((sound) => {
    if (sounds[sound]) {
      sounds[sound].pause();
      sounds[sound].currentTime = 0;
    }
  });
}
