import React, { useState } from "react";
import { formFields } from "../data/constants";
import { Pencil, Check } from "lucide-react";

export function JourneyForm({ journeyDetails, setJourneyDetails }) {
  const [editingField, setEditingField] = useState(null);
  const [draft, setDraft] = useState({});

  function startEdit(fieldName) {
    setEditingField(fieldName);
    setDraft({ [fieldName]: journeyDetails[fieldName] });
  }

  function commitEdit(fieldName) {
    if (editingField === fieldName) {
      setJourneyDetails((prev) => ({ ...prev, [fieldName]: draft[fieldName] }));
      setEditingField(null);
      setDraft({});
    }
  }

  function handleKeyDown(e, fieldName) {
    if (e.key === "Enter") {
      e.preventDefault();
      commitEdit(fieldName);
    }
    if (e.key === "Escape") {
      setEditingField(null);
      setDraft({});
    }
  }

  function handleDraftChange(e, fieldName) {
    setDraft({ [fieldName]: e.target.value });
  }

  return (
    <div className="content form-content">
      <section className="section form-section">
        <h2>Journey Details</h2>
        <div className="journey-form">
          {formFields.map((field) => {
            const isEditing = editingField === field.name;
            const value = isEditing
              ? draft[field.name] ?? ""
              : journeyDetails[field.name] ?? "";

            return (
              <div className="form-field" key={field.name}>
                <span>
                  {field.label}
                  {field.required && <strong> *</strong>}
                </span>

                {isEditing ? (
                  <div className="form-field-edit-row">
                    {field.type === "select" ? (
                      <select
                        autoFocus
                        className="form-field-select"
                        name={field.name}
                        value={value}
                        onChange={(e) => handleDraftChange(e, field.name)}
                        onKeyDown={(e) => handleKeyDown(e, field.name)}
                      >
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        autoFocus
                        min={field.type === "number" ? "0" : undefined}
                        name={field.name}
                        required={field.required}
                        type={field.type || "text"}
                        value={value}
                        placeholder={field.placeholder}
                        onChange={(e) => handleDraftChange(e, field.name)}
                        onKeyDown={(e) => handleKeyDown(e, field.name)}
                      />
                    )}
                    <button
                      type="button"
                      className="form-save-btn"
                      aria-label="Save"
                      onClick={() => commitEdit(field.name)}
                    >
                      <Check size={11} />
                    </button>
                  </div>
                ) : (
                  <div className="form-field-readonly-row">
                    <span className="form-field-value">
                      {value || <em className="form-field-empty">—</em>}
                    </span>
                    <button
                      type="button"
                      className="form-edit-btn"
                      aria-label={`Edit ${field.label}`}
                      onClick={() => startEdit(field.name)}
                    >
                      <Pencil size={10} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

