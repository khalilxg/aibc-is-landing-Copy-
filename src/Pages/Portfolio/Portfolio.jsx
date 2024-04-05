import React from "react";
import "./Portfolio.scss";
import { useState, useEffect } from "react";


import Design from "../../components/Design/Design";
import Minecraft from "../../components/Minecraft/Minecraft";
import DiscordBots from "../../components/DiscordBots/DiscordBots";
import Website from "../../components/Website/Website";

// Particles js Configuration file
import particles from "../../particlesjs-config";


function Portfolio(props) {

    //Animation Initiation
	useEffect(() => {
		tsParticles.load("particles", particles);
	},[]);

    //State to switch between Categories
	const [tab, setTab] = useState("design");
	return (
		<>
			<div className="portfolio">
				<div className="portfolio__header padding" id="particles">
					<h1 className="portfolio__header__heading">THEMES</h1>

					<div className="category-menu">
						<div
							className={`btn-category ${
								tab === "design" ? "btn-active" : ""
							}`}
							onClick={() => setTab("design")}
						>
							SupportGPT Collections
						</div>
						<div
							className={`btn-category ${
								tab === "discordbots" ? "btn-active" : ""
							}`}
							onClick={() => setTab("discordbots")}
						>
							Consulting
						</div>
						<div
							className={`btn-category ${
								tab === "minecraft" ? "btn-active" : ""
							}`}
							onClick={() => setTab("minecraft")}
						>
							Solutions
						</div>
						<div
							className={`btn-category ${
								tab === "website" ? "btn-active" : ""
							}`}
							onClick={() => setTab("website")}
						>
							Prototypes
						</div>
					</div>
				</div>

				<div className="cat-display padding">
					{tab === "design" && <Design />}
					{tab === "discordbots" && <DiscordBots />}
					{tab === "minecraft" && <Minecraft />}
					{tab === "website" && <Website />}
				</div>
			</div>
		</>
	);
}
import "./Portfolio.scss";

export default Portfolio;
