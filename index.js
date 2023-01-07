const backgroundColor = "#0C0C0C";
const foregroundColor = "#D9D9D9";
const cursorColor = "#FC971F";
const borderColor = "transparent";

const colors = {
	black: "#1A1A1A",
	blue: "#9D65FF",
	brightBlack: "#625E4C",
	brightBlue: "#9D65FF",
	brightCyan: "#58D1EB",
	brightGreen: "#98E024",
	brightPurple: "#F4005F",
	brightRed: "#F4005F",
	brightWhite: "#F6F6EF",
	brightYellow: "#E0D561",
	cursorColor: "#FC971F",
	cyan: "#58D1EB",
	green: "#98E024",
	purple: "#F4005F",
	red: "#F4005F",
	white: "#C4C5B5",
	yellow: "#FD971F",
};

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		cursorColor,
		borderColor,
		colors,
		termCSS: `
        ${config.termCSS || ""}
        `,
		css: `
        ${config.css || ""}
        .tab_tab {
            border: 0;
        }
        .tab_tab:before {
            content: '';
        }
        .tab_active:before {
            content: '';
        }
        .tab_text {
            color: ${foregroundColor};
        }
        .tab_active {
            background-color: ${backgroundColor};
            font-weight: bold;
        }
        .tab_active .tab_text {
            color: ${foregroundColor};
        }
        `,
	});
};
