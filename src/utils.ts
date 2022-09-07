import store from "./store";

export function keepWhitespaces(text: string) {
  return text.replace(/ /g, "\u00a0");
}

export function getTmuxConfigValues() {
  return {
    status: {
      bg: store.getPropertyValue("status", "general", "background-color"),
    },
    mode: {
      fg: store.getPropertyValue("mode", "general", "color"),
      bg: store.getPropertyValue("mode", "general", "background-color"),
    },
    clock: {
      fg: store.getPropertyValue("clock", "general", "background-color"),
    },
    statusLeft: {
      fg: store.getPropertyValue("statusLeft", "general", "color"),
      bg: store.getPropertyValue("statusLeft", "general", "background-color"),
      prefix: {
        fg: store.getPropertyValue("statusLeft", "prefix", "color"),
        bg: store.getPropertyValue("statusLeft", "prefix", "background-color"),
        text: store.getPropertyValue("statusLeft", "prefix", "prefix"),
      },
      suffix: {
        fg: store.getPropertyValue("statusLeft", "suffix", "color"),
        bg: store.getPropertyValue("statusLeft", "suffix", "background-color"),
        text: store.getPropertyValue("statusLeft", "suffix", "suffix"),
      },
    },
    statusRight: {
      fg: store.getPropertyValue("statusRight", "general", "color"),
      bg: store.getPropertyValue("statusRight", "general", "background-color"),
      prefix: {
        fg: store.getPropertyValue("statusRight", "prefix", "color"),
        bg: store.getPropertyValue("statusRight", "prefix", "background-color"),
        text: store.getPropertyValue("statusRight", "prefix", "prefix"),
      },
      suffix: {
        fg: store.getPropertyValue("statusRight", "suffix", "color"),
        bg: store.getPropertyValue("statusRight", "suffix", "background-color"),
        text: store.getPropertyValue("statusRight", "suffix", "suffix"),
      },
    },
    windowStatus: {
      fg: store.getPropertyValue("windowStatus", "general", "color"),
      bg: store.getPropertyValue("windowStatus", "general", "background-color"),
      prefix: {
        fg: store.getPropertyValue("windowStatus", "prefix", "color"),
        bg: store.getPropertyValue(
          "windowStatus",
          "prefix",
          "background-color"
        ),
        text: store.getPropertyValue("windowStatus", "prefix", "prefix"),
      },
      suffix: {
        fg: store.getPropertyValue("windowStatus", "suffix", "color"),
        bg: store.getPropertyValue(
          "windowStatus",
          "suffix",
          "background-color"
        ),
        text: store.getPropertyValue("windowStatus", "suffix", "suffix"),
      },
    },
    windowStatusCurrent: {
      fg: store.getPropertyValue("windowStatusCurrent", "general", "color"),
      bg: store.getPropertyValue(
        "windowStatusCurrent",
        "general",
        "background-color"
      ),
      prefix: {
        fg: store.getPropertyValue("windowStatusCurrent", "prefix", "color"),
        bg: store.getPropertyValue(
          "windowStatusCurrent",
          "prefix",
          "background-color"
        ),
        text: store.getPropertyValue("windowStatusCurrent", "prefix", "prefix"),
      },
      suffix: {
        fg: store.getPropertyValue("windowStatusCurrent", "suffix", "color"),
        bg: store.getPropertyValue(
          "windowStatusCurrent",
          "suffix",
          "background-color"
        ),
        text: store.getPropertyValue("windowStatusCurrent", "suffix", "suffix"),
      },
    },
    pane: {
      fg: store.getPropertyValue("pane", "general", "border-color"),
    },
    paneActive: {
      fg: store.getPropertyValue("paneActive", "general", "border-color"),
    },
  };
}
