import React from "react";
import { getMonsterDetails } from "../../utils/monsterDetails";
import "./monster-detail.styles.css";

export const MonsterDetail = ({ monster, onBack }) => {
  const details = getMonsterDetails(monster.id);

  const dangerLevelColor = (level) => {
    if (level <= 2) return "#4ade80"; // green
    if (level <= 4) return "#fbbf24"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="monster-detail-overlay">
      <div className="monster-detail-container">
        {/* Header with back button */}
        <div className="detail-header">
          <button className="back-button" onClick={onBack}>
            ← Back to Rolodex
          </button>
          <h1 className="monster-name">{monster.name}</h1>
          <div
            className="danger-badge"
            style={{ backgroundColor: dangerLevelColor(details.dangerLevel) }}
          >
            DANGER LEVEL: {details.dangerLevel}/5
          </div>
        </div>

        {/* Main content */}
        <div className="detail-content">
          {/* Avatar section */}
          <div className="avatar-section">
            <div className="monster-avatar">
              <img
                src={`https://robohash.org/${monster.id}?set=set2&size=400x400`}
                alt={monster.name}
              />
              <div className="glow-effect"></div>
            </div>
            <div className="status-indicators">
              <div className="status-item">
                <span className="status-label">Intelligence</span>
                <div className="stat-bar">
                  <div
                    className="stat-fill"
                    style={{ width: `${details.intelligence * 20}%` }}
                  ></div>
                </div>
                <span className="stat-value">{details.intelligence}/5</span>
              </div>
            </div>
          </div>

          {/* About section */}
          <div className="about-section">
            <h2 className="section-title">About This Creature</h2>
            <p className="description">
              {monster.name} is a {details.personality.toLowerCase()}{" "}
              {details.race} native to {details.homePlanet}. This remarkable
              specimen possesses the rare ability to{" "}
              {details.primaryAbility.toLowerCase()} and is known for its{" "}
              {details.secondaryAbility.toLowerCase()} powers.
            </p>

            {/* Specs Grid */}
            <div className="specs-grid">
              <div className="spec-card spec-card-1">
                <div className="spec-icon">🧬</div>
                <div className="spec-content">
                  <label>Race</label>
                  <p>{details.race}</p>
                </div>
              </div>

              <div className="spec-card spec-card-2">
                <div className="spec-icon">📍</div>
                <div className="spec-content">
                  <label>Home Planet</label>
                  <p>{details.homePlanet}</p>
                </div>
              </div>

              <div className="spec-card spec-card-3">
                <div className="spec-icon">📏</div>
                <div className="spec-content">
                  <label>Height</label>
                  <p>{details.height}</p>
                </div>
              </div>

              <div className="spec-card spec-card-4">
                <div className="spec-icon">⚖️</div>
                <div className="spec-content">
                  <label>Weight</label>
                  <p>{details.weight}</p>
                </div>
              </div>

              <div className="spec-card spec-card-5">
                <div className="spec-icon">🍽️</div>
                <div className="spec-content">
                  <label>Diet</label>
                  <p>{details.diet}</p>
                </div>
              </div>

              <div className="spec-card spec-card-6">
                <div className="spec-icon">⏰</div>
                <div className="spec-content">
                  <label>Age</label>
                  <p>{details.age}</p>
                </div>
              </div>
            </div>

            {/* Abilities Section */}
            <div className="abilities-section">
              <h3>Special Abilities</h3>
              <div className="abilities-container">
                <div className="ability-badge primary">
                  <span className="ability-type">Primary</span>
                  <span className="ability-name">{details.primaryAbility}</span>
                </div>
                <div className="ability-badge secondary">
                  <span className="ability-type">Secondary</span>
                  <span className="ability-name">
                    {details.secondaryAbility}
                  </span>
                </div>
              </div>
            </div>

            {/* Personality */}
            <div className="personality-section">
              <h3>Personality</h3>
              <div className="personality-badge">{details.personality}</div>
            </div>

            {/* Contact */}
            <div className="contact-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> {monster.email}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {monster.phone || "Available upon request"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
