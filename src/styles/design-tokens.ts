export const spacing = {
	section:
		"relative scroll-mt-2 py-16 max-w-[1728px] mx-auto border-l-4 border-r-4 md:py-20 lg:py-32",
	container:
		"w-full max-w-[1728px] mx-auto px-4 flex flex-col space-y-12 sm:px-6 md:space-y-16 md:px-8 lg:px-20",
};

export const buttons = {
	primary:
		"border-4 border-black bg-pink px-8 py-6 flex justify-center items-center w-full [box-shadow:-4px_4px_0_0_#000] font-bold uppercase text-2xl leading-tight tracking-wide font-display cursor-pointer transition ease-in-out bg-gradient-to-tr hover:from-scarlet hover:to-pink hover:translate-x-[2px] hover:translate-y-[-2px] hover:[box-shadow:-8px_8px_0_0_#000] sm:w-fit",
};

export const forms = {
	input:
		"p-4 rounded border-2 border-black bg-cream color-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-yellow placeholder-black/70 text-base disabled:text-black/20 disabled:cursor-not-allowed",
	label: "px-4",
	fieldset: "flex flex-col gap-2",
};

export const baseText = `text-pretty font-sans font-bold block max-w-[80ch]`;

export const typography = {
	h1: `${baseText} leading-tight text-3xl sm:text-5xl lg:text-6xl`,
	h2: `${baseText} leading-tight text-3xl sm:text-4xl xl:text-5xl`,
	h3: `${baseText} leading-tight text-2xl sm:text-3xl`,
	h4: `${baseText} leading-tight text-xl sm:text-2xl`,
	h5: `${baseText} leading-normal text-lg sm:text-xl`,
	h6: `${baseText} leading-normal text-base sm:text-lg`,

	bodyLarge: "text-lg font-light leading-snug lg:text-2xl",
	body: "text-base font-light leading-snug sm:text-lg",
	bodySmall: "text-base font-light leading-snug",

	link: "break-all font-medium underline",
};
