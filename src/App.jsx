import { useState } from "react";
import {
  humiliationOptions,
  villainOptions,
  heroineOptions,
  incitingIncidentOptions,
  lowDisguiseOptions,
  highStatusOptions,
  subgenreTags,
} from "./titanData";

/* ===================== ROOT APP ===================== */

function App() {
  const [mode, setMode] = useState("story"); // "story" | "speedrun"
  const [step, setStep] = useState(1);
  const [choices, setChoices] = useState({
    humiliation: "",
    villain: "",
    heroine: "",
    incitingIncident: "",
    mysteryMan: "",
    lowDisguise: "",
    highStatus: "",
    subgenre: "",
  });

  const [selfCheck, setSelfCheck] = useState({
    humPublic: false,
    humUnfair: false,
    humCostly: false,
    villainPower: false,
    heroineSympathy: false,
    incidentDesperate: false,
    titanFeelsDangerous: false,
    forcedProximity: false,
    revealExplosive: false,
  });

  const [savedLoglines, setSavedLoglines] = useState([]);

  const loglineText = buildLogline(choices);

  const handleSave = () => {
    if (!choices.humiliation || !choices.villain || !choices.heroine) {
      alert(
        "Fill at least Humiliation, Villain, and Heroine before saving a Titan logline."
      );
      return;
    }
    const id = Date.now().toString();
    setSavedLoglines((prev) => [
      ...prev,
      {
        id,
        text: loglineText,
        createdAt: new Date().toLocaleString(),
      },
    ]);
    alert("Saved this Titan logline.");
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <header style={{ marginBottom: 12 }}>
        <h1 style={{ margin: 0 }}>Titan Genre Logline Builder</h1>
        <p style={{ margin: "4px 0 0", fontSize: 14, color: "#ffffffff" }}>
          Guided builder for the <strong>Titan</strong> microdrama genre.  Copyright Joel Lim Studios.
        </p>
      </header>

      <IntroPanel />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 16,
          alignItems: "flex-start",
          marginTop: 12,
        }}
      >
        <TitanSidebar mode={mode} setMode={setMode} />

        <main>
          <StepIndicator step={step} />

          <StepContent
            mode={mode}
            step={step}
            choices={choices}
            setChoices={setChoices}
          />

          <Navigation step={step} setStep={setStep} choices={choices} />

          <LoglinePreview logline={loglineText} choices={choices} />

          <SelfCheckPanel selfCheck={selfCheck} setSelfCheck={setSelfCheck} />

          <div style={{ marginTop: 12, marginBottom: 16 }}>
            <button
              onClick={handleSave}
              style={{
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid #ffffffff",
                background: "#414040ff",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Save this logline
            </button>
            <span style={{ marginLeft: 8, fontSize: 12, color: "#232323ff" }}>
              {savedLoglines.length} saved
            </span>
          </div>

          <SavedLoglines savedLoglines={savedLoglines} />
        </main>
      </div>
    </div>
  );
}

/* ===================== OPTION LEVEL (WITH SEARCH + RANDOM) ===================== */

function OptionLevel({
  title,
  description,
  optionsKey,
  optionsList,
  choices,
  setChoices,
  hints = [],
}) {
  const [search, setSearch] = useState("");
  const value = choices[optionsKey] || "";

  const select = (v) => {
    setChoices({ ...choices, [optionsKey]: v });
  };

  // optionsList is now an array of { text, tags? } (or strings for safety)
  const filtered = optionsList.map((opt) =>
    typeof opt === "string" ? { text: opt, tags: [] } : opt
  ).filter((opt) => {
    const text = opt.text.toLowerCase();
    const tags = (opt.tags || []).join(" ").toLowerCase();
    const haystack = text + " " + tags;
    return haystack.includes(search.toLowerCase());
  });

  const isCustom =
    value && !optionsList.some((opt) => {
      const text = typeof opt === "string" ? opt : opt.text;
      return text === value;
    });

  const randomPick = () => {
    if (!filtered.length) return;
    const choice = filtered[Math.floor(Math.random() * filtered.length)];
    select(choice.text);
  };

  return (
    <div
      style={{
        border: "1px solid #000000ff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>{title}</h2>
      <p style={{ margin: "0 0 8px", fontSize: 14, color: "#555" }}>
        {description}
      </p>

      {hints.length > 0 && (
        <ul
          style={{
            margin: "0 0 10px",
            paddingLeft: 18,
            fontSize: 12,
            color: "#777",
          }}
        >
          {hints.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {/* Search + random row */}
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <input
          type="text"
          placeholder="Filter by keyword or vibe (e.g. 'office', 'viral', 'housing')…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: 6,
            borderRadius: 6,
            border: "1px solid #ddd",
            fontSize: 12,
          }}
        />
        <button
          type="button"
          onClick={randomPick}
          style={{
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid #ddd",
            background: "#474747ff",
            fontSize: 11,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          🎲 Random
        </button>
      </div>

      {/* Scrollable pill bank */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          maxHeight: 180,
          overflowY: "auto",
          marginBottom: 8,
        }}
      >
        {filtered.map((opt) => {
          const text = opt.text;
          const selected = value === text;
          return (
            <button
              key={text}
              onClick={() => select(text)}
              style={{
                padding: "4px 8px",
                borderRadius: 999,
                border: selected ? "2px solid #000" : "1px solid #ddd",
                background: selected ? "#000" : "#000000ff",
                color: selected ? "#fff" : "#333",
                fontSize: 12,
                textAlign: "left",
                cursor: "pointer",
                whiteSpace: "normal",
              }}
            >
              {text}
            </button>
          );
        })}
      </div>

      {/* Custom box */}
      <textarea
        placeholder="Or write your own version…"
        value={isCustom ? value : ""}
        onChange={(e) => select(e.target.value)}
        style={{
          width: "100%",
          minHeight: 60,
          fontSize: 13,
          padding: 6,
          borderRadius: 6,
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
}

/* ===================== INTRO + SIDEBAR ===================== */

function IntroPanel() {
  return (
    <section
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 12,
        fontSize: 13,
        background: "#000",
        color: "#f5f5f5",
      }}
    >
      <h2 style={{ margin: "0 0 6px", fontSize: 15 }}>How to use this page</h2>
      <ol style={{ margin: 0, paddingLeft: 18 }}>
        <li>
          This tool is <strong>only for the Titan genre</strong> – stories built
          on a huge status gap, public humiliation, a desperate contract, and a
          hidden Titan male lead.
        </li>
        <li>
          Go through the levels from 1–6 and either pick from the word bank
          cards or write your own text.
        </li>
        <li>
          Watch the logline preview update as you go. Adjust wording until it
          feels like a sharp, one-sentence hook.
        </li>
        <li>
          Use the <strong>Self-check</strong> box to audit whether the
          humiliation, villain, heroine, and Titan all meet Titan criteria.
        </li>
        <li>
          Save any loglines you like as a mini deck. You can copy/paste them
          into your writers’ room notes.
        </li>
      </ol>
      <p style={{ marginTop: 6, fontSize: 12, color: "#999" }}>
        More microdrama genres (e.g. Revenge, Found Family, Celebrity, Mafia)
        will be added as separate builders in future versions.
      </p>
    </section>
  );
}

function TitanSidebar({ mode, setMode }) {
  return (
    <aside
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 12,
        fontSize: 13,
      }}
    >
      <h2 style={{ fontSize: 16, margin: "0 0 8px" }}>What is Titan?</h2>
      <p style={{ margin: "0 0 8px" }}>
        Titan = public humiliation in EP1, a massive status gap, a desperate
        contract / living arrangement, a cold secret Titan (high-status male
        lead), and an explosive reveal mid-series.
      </p>

      <div
        style={{
          marginTop: 8,
          padding: 8,
          borderRadius: 6,
          background: "#000",
          color: "#f5f5f5",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 4,
            textTransform: "uppercase",
          }}
        >
          Logline template
        </div>
       <p style={{ margin: 0, fontSize: 12, lineHeight: 1.4 }}>
  After being <strong>[HUMILIATED]</strong> by her{" "}
  <strong>[VILLAIN]</strong>, a <strong>[STRUGGLING HEROINE]</strong>{" "}
  makes a desperate decision to <strong>[INCITING INCIDENT]</strong> with
  a man she believes is just a{" "}
  <strong>[LOW DISGUISE]</strong>, but he is actually the{" "}
  <strong>[HIGH STATUS]</strong>.
</p>
      </div>

      <div style={{ marginTop: 12 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 4,
            textTransform: "uppercase",
          }}
        >
          Mode
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={() => setMode("story")}
            style={{
              flex: 1,
              padding: "6px 8px",
              borderRadius: 999,
              border: mode === "story" ? "1px solid #000" : "1px solid #ddd",
              background: mode === "story" ? "#000" : "#fff",
              color: mode === "story" ? "#fff" : "#333",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Story room
          </button>
          <button
            onClick={() => setMode("speedrun")}
            style={{
              flex: 1,
              padding: "6px 8px",
              borderRadius: 999,
              border:
                mode === "speedrun" ? "1px solid #000" : "1px solid #ddd",
              background: mode === "speedrun" ? "#000" : "#fff",
              color: mode === "speedrun" ? "#fff" : "#333",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Speedrun
          </button>
        </div>
      </div>
    </aside>
  );
}

/* ===================== STEPPER ===================== */

function StepIndicator({ step }) {
  const labels = [
    "Humiliation",
    "Villain",
    "Heroine",
    "Incident",
    "Mystery Man",
    "Disguise → Titan",
  ];

  return (
    <div
      style={{
        marginBottom: 12,
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}
    >
      {labels.map((label, idx) => {
        const n = idx + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div
            key={label}
            style={{
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid #ccc",
              background: active ? "#000" : done ? "#222" : "#f5f5f5",
              color: active || done ? "#fff" : "#333",
              fontSize: 11,
            }}
          >
            {n}. {label}
          </div>
        );
      })}
    </div>
  );
}

/* ===================== STEP CONTENT ===================== */

function StepContent({ mode, step, choices, setChoices }) {
  if (mode === "speedrun") {
    return (
      <SpeedrunContent choices={choices} setChoices={setChoices} />
    );
  }

  switch (step) {
    case 1:
      return (
        <OptionLevel
          title="Level 1: HUMILIATION"
          description="Pick a public, unfair humiliation that destroys her life."
          optionsKey="humiliation"
          optionsList={humiliationOptions}
          choices={choices}
          setChoices={setChoices}
          hints={[
            "Make it public (crowd, video, witnesses).",
            "Make it unfair (not her fault).",
            "Add an immediate loss (job, home, scholarship).",
          ]}
        />
      );
    case 2:
      return (
        <OptionLevel
          title="Level 2: VILLAIN"
          description="Choose the powerful person who crushes her."
          optionsKey="villain"
          optionsList={villainOptions}
          choices={choices}
          setChoices={setChoices}
          hints={[
            "Give them institutional power (boss, HR, elder, landlord).",
            "They can weaponise reputation, income, or safety.",
          ]}
        />
      );
    case 3:
      return (
        <OptionLevel
          title="Level 3: HEROINE"
          description="Define who she is and why we root for her."
          optionsKey="heroine"
          optionsList={heroineOptions}
          choices={choices}
          setChoices={setChoices}
          hints={[
            "Low/mid status job.",
            "Carrying strain: debts, family, visa, illness.",
          ]}
        />
      );
    case 4:
      return (
        <OptionLevel
          title="Level 4: INCITING INCIDENT"
          description="What desperate decision forces her into the contract / living situation?"
          optionsKey="incitingIncident"
          optionsList={incitingIncidentOptions}
          choices={choices}
          setChoices={setChoices}
          hints={[
            "Should feel unavoidable, not convenient.",
            "Commonly tied to housing, debts, safety.",
          ]}
        />
      );
    case 5:
      return (
        <OptionLevel
          title="Level 5: MYSTERY MAN (HOW SHE SEES HIM)"
          description="How does she read him at first? Low-status, safe to underestimate."
          optionsKey="mysteryMan"
          optionsList={lowDisguiseOptions}
          choices={choices}
          setChoices={setChoices}
          hints={[
            "He looks low-status and harmless.",
            "He is more quiet/neutral than warm.",
          ]}
        />
      );
    case 6:
      return (
        <DisguiseLevel choices={choices} setChoices={setChoices} />
      );
    default:
      return null;
  }
}

/* ===================== LEVEL 6 – DISGUISE → TITAN ===================== */

function DisguiseLevel({ choices, setChoices }) {
  const update = (key, val) => {
    setChoices({ ...choices, [key]: val });
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>
        Level 6: LOW DISGUISE → HIGH STATUS
      </h2>
      <p style={{ margin: "0 0 8px", fontSize: 14, color: "#555" }}>
        Decide how low he looks to her, and who he really is once the mask
        drops.
      </p>

      <SelectField
        label="Low disguise (how she reads him)"
        value={choices.lowDisguise}
        onChange={(v) => update("lowDisguise", v)}
        options={lowDisguiseOptions}
      />

      <SelectField
        label="High status (true Titan identity)"
        value={choices.highStatus}
        onChange={(v) => update("highStatus", v)}
        options={highStatusOptions}
      />

      <SelectField
        label="Sub-genre flavour (optional)"
        value={choices.subgenre}
        onChange={(v) => update("subgenre", v)}
        options={subgenreTags}
      />

      <div
        style={{
          marginTop: 10,
          padding: 8,
          borderRadius: 6,
          background: "#fffdf5",
          border: "1px dashed #facc15",
          fontSize: 12,
          color: "#6b5800",
        }}
      >
        <strong>Undercover cue (no scoring, just think it through):</strong>
        <ul style={{ margin: "4px 0 0", paddingLeft: 16 }}>
          <li>Why would a man with this level of power hide as this disguise?</li>
          <li>How does the disguise exploit the villain&apos;s blindspot?</li>
          <li>
            What is he watching for in her before he reveals himself (if ever)?
          </li>
        </ul>
        <p style={{ margin: "4px 0 0" }}>
          Use these questions in the room; this app won&apos;t judge your
          answer.
        </p>
      </div>
    </div>
  );
}

/* ===================== SHARED FIELDS ===================== */

function SelectField({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: 6,
          borderRadius: 6,
          border: "1px solid #ddd",
          fontSize: 13,
        }}
      >
        <option value="">Select…</option>
        {options.map((opt) => {
          const text = typeof opt === "string" ? opt : opt.text;
          return (
            <option key={text} value={text}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

/* ===================== SPEEDRUN MODE ===================== */

function SpeedrunContent({ choices, setChoices }) {
  const set = (key, val) => setChoices({ ...choices, [key]: val });

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2 style={{ margin: "0 0 4px", fontSize: 18 }}>Speedrun Mode</h2>
      <p style={{ margin: "0 0 8px", fontSize: 14, color: "#555" }}>
        Fill the main fields on one screen. The logline preview updates live.
      </p>

      <GridField
        label="Humiliation"
        value={choices.humiliation}
        onChange={(v) => set("humiliation", v)}
        options={humiliationOptions}
      />
      <GridField
        label="Villain"
        value={choices.villain}
        onChange={(v) => set("villain", v)}
        options={villainOptions}
      />
      <GridField
        label="Heroine"
        value={choices.heroine}
        onChange={(v) => set("heroine", v)}
        options={heroineOptions}
      />
      <GridField
        label="Inciting incident"
        value={choices.incitingIncident}
        onChange={(v) => set("incitingIncident", v)}
        options={incitingIncidentOptions}
      />
      <GridField
        label="Mystery man"
        value={choices.mysteryMan}
        onChange={(v) => set("mysteryMan", v)}
        options={lowDisguiseOptions}
      />
      <GridField
        label="Low disguise"
        value={choices.lowDisguise}
        onChange={(v) => set("lowDisguise", v)}
        options={lowDisguiseOptions}
      />
      <GridField
        label="High status"
        value={choices.highStatus}
        onChange={(v) => set("highStatus", v)}
        options={highStatusOptions}
      />
    </div>
  );
}

function GridField({ label, value, onChange, options }) {
  const optionTexts = options.map((opt) =>
    typeof opt === "string" ? opt : opt.text
  );
  const custom = value && !optionTexts.includes(value);

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          maxHeight: 120,
          overflowY: "auto",
          marginBottom: 4,
        }}
      >
        {optionTexts.map((text) => {
          const selected = value === text;
          return (
            <button
              key={text}
              onClick={() => onChange(text)}
              style={{
                padding: "4px 8px",
                borderRadius: 999,
                border: selected ? "2px solid #000" : "1px solid #ddd",
                background: selected ? "#000" : "#fff",
                color: selected ? "#fff" : "#333",
                fontSize: 12,
                cursor: "pointer",
                whiteSpace: "normal",
                textAlign: "left",
              }}
            >
              {text}
            </button>
          );
        })}
      </div>

      <textarea
        placeholder="Or type your own…"
        value={custom ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          minHeight: 40,
          fontSize: 13,
          padding: 6,
          borderRadius: 6,
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
}

/* ===================== NAVIGATION ===================== */

function Navigation({ step, setStep, choices }) {
  const canBack = step > 1;
  const canNext = step < 6;

  const keys = [
    "humiliation",
    "villain",
    "heroine",
    "incitingIncident",
    "mysteryMan",
    "lowDisguise",
  ];
  const key = keys[step - 1];
  const filled = choices[key] && choices[key].trim().length > 0;

  const handleNext = () => {
    if (!filled && canNext) {
      alert("Fill this level first.");
      return;
    }
    if (canNext) setStep(step + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <button
        onClick={() => canBack && setStep(step - 1)}
        disabled={!canBack}
        style={{
          padding: "8px 16px",
          borderRadius: 999,
          border: "1px solid #ccc",
          fontSize: 13,
          background: canBack ? "#fff" : "#f5f5f5",
          cursor: canBack ? "pointer" : "not-allowed",
        }}
      >
        ← Back
      </button>
      <button
        onClick={handleNext}
        disabled={!canNext}
        style={{
          padding: "8px 16px",
          borderRadius: 999,
          border: "none",
          fontSize: 13,
          background: filled && canNext ? "#000" : "#ccc",
          color: "#fff",
          cursor: filled && canNext ? "pointer" : "not-allowed",
        }}
      >
        {canNext ? "Next →" : "Done"}
      </button>
    </div>
  );
}

/* ===================== PREVIEW & SELF CHECK ===================== */

function LoglinePreview({ logline, choices }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(logline);
      alert("Logline copied to clipboard.");
    } catch (err) {
      console.error("Copy failed", err);
      alert("Could not copy. You can still select and copy manually.");
    }
  };

  // Bold the selected segments inside the logline
  const bolded = (() => {
    let output = logline;

    const map = {
      [choices.humiliation]: "<strong>" + choices.humiliation + "</strong>",
      [choices.villain]: "<strong>" + choices.villain + "</strong>",
      [choices.heroine]: "<strong>" + choices.heroine + "</strong>",
      [choices.incitingIncident]: "<strong>" + choices.incitingIncident + "</strong>",
      [choices.lowDisguise]: "<strong>" + choices.lowDisguise + "</strong>",
      [choices.highStatus]: "<strong>" + choices.highStatus + "</strong>",
    };

    Object.keys(map).forEach((key) => {
      if (!key) return;
      const safe = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape regex chars
      output = output.replace(new RegExp(safe, "g"), map[key]);
    });

    return output;
  })();

  return (
    <div
      style={{
        padding: 14,
        borderRadius: 8,
        border: "1px solid #222",
        marginBottom: 10,
      }}
    >
      <div
        style={{
          marginBottom: 6,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "#969696ff",
        }}
      >
        <span style={{ fontSize: 14, letterSpacing: 1 }}>
          TITAN LOGLINE PREVIEW
        </span>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            padding: "4px 10px",
            borderRadius: 999,
            border: "1px solid #ddd",
            background: "#222222ff",
            fontSize: 11,
            cursor: "pointer",
          }}
        >
          Copy
        </button>
      </div>

      <p
        style={{ fontSize: 15, lineHeight: 1.5 }}
        dangerouslySetInnerHTML={{ __html: bolded }}
      />
    </div>
  );
}

function SelfCheckPanel({ selfCheck, setSelfCheck }) {
  const toggle = (key) =>
    setSelfCheck({ ...selfCheck, [key]: !selfCheck[key] });

  const Row = ({ keyName, label }) => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
      }}
    >
      <input
        type="checkbox"
        checked={selfCheck[keyName]}
        onChange={() => toggle(keyName)}
      />
      <span>{label}</span>
    </label>
  );

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 8,
        border: "1px solid #eee",
        marginBottom: 12,
        fontSize: 12,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: 13 }}>Self-check: Titan test</h3>
      <p style={{ margin: "0 0 6px", color: "#666" }}>
        Use this as a manual QA. The app doesn&apos;t score you – you decide if
        the logline is truly Titan.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 6,
        }}
      >
        <Row
          keyName="humPublic"
          label="Humiliation is public / visible (crowd, video, witnesses)."
        />
        <Row
          keyName="humUnfair"
          label="Humiliation is unfair (not really her fault)."
        />
        <Row
          keyName="humCostly"
          label="She loses something big immediately (job, home, scholarship)."
        />
        <Row
          keyName="villainPower"
          label="Villain has real power over her (job, money, status, safety)."
        />
        <Row
          keyName="heroineSympathy"
          label="Heroine feels sympathetic and low/mid status."
        />
        <Row
          keyName="incidentDesperate"
          label="Inciting incident feels desperate and unavoidable."
        />
        <Row
          keyName="titanFeelsDangerous"
          label="Titan feels dangerous / powerful once revealed, not soft."
        />
        <Row
          keyName="forcedProximity"
          label="Setup implies forced proximity / ongoing entanglement."
        />
        <Row
          keyName="revealExplosive"
          label="High-status reveal would feel explosive when it happens."
        />
      </div>
    </div>
  );
}

/* ===================== SAVED LOGLINES ===================== */

function SavedLoglines({ savedLoglines }) {
  if (!savedLoglines.length) return null;

  return (
    <div style={{ marginTop: 16, marginBottom: 32 }}>
      <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>Saved Titan loglines</h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 8,
        }}
      >
        {savedLoglines.map((item, idx) => (
          <li
            key={item.id}
            style={{
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #eee",
              fontSize: 13,
              lineHeight: 1.4,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
                fontSize: 11,
                color: "#666",
              }}
            >
              <span>#{idx + 1}</span>
              <span>{item.createdAt}</span>
            </div>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===================== HELPER: BUILD LOGLINE ===================== */

function buildLogline(c) {
  const hum = c.humiliation || "[HUMILIATED]";
  const vil = c.villain || "[VILLAIN]";
  const her = c.heroine || "[HEROINE]";
  const inc = c.incitingIncident || "[INCITING INCIDENT]";
  const low = c.lowDisguise || "[LOW DISGUISE]";
  const high = c.highStatus || "[HIGH STATUS]";

  return `After being ${hum} by ${vil}, ${her} makes a desperate decision to ${inc} with a man she believes is just a ${low}, but he is actually the ${high}.`;
}

export default App;