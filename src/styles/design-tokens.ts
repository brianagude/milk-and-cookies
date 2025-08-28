export const spacing = {
	section:
		"relative scroll-mt-2 py-16 max-w-[1728px] mx-auto border-l-4 border-r-4 md:py-20 lg:py-32",
	container:
		"w-full max-w-[1728px] mx-auto px-4 flex flex-col space-y-12 sm:px-6 md:space-y-16 md:px-8 lg:px-20",
};

const baseHeading = `text-pretty font-bold max-w-[80ch] font-bold leading-tight tracking-wide uppercase`;
const baseBody = `text-pretty font-sans leading-relaxed tracking-wide text-xl max-w-[60ch]`;

export const typography = {
	h1: `${baseHeading} font-display text-3xl md:text-6xl xl:text-8xl`,
	h2: `${baseHeading} font-display text-3xl md:text-5xl xl:text-7xl`,
	h3: `${baseHeading} font-display text-3xl md:text-4xl xl:text-5xl`,
	h4: `${baseHeading} font-sans text-3xl md:text-4xl `,
	h5: `${baseHeading} font-sans text-2xl md:text-3xl`,
	h6: `${baseHeading} font-sans text-2xl`,
	body: `${baseBody} text-base md:text-xl`,
	bodyLarge: `${baseBody} text-xl md:text-2xl`,
	blockLarge: `text-stroke text-shadow-lg`,
	blockSmall: `text-stroke text-shadow-sm`
}

const buttonBase = 'border-4 border-black flex justify-center items-center w-full [box-shadow:-4px_4px_0_0_#000] font-bold uppercase text-lg py-4 px-5 leading-tight tracking-wide font-display cursor-pointer transition ease-in-out hover:translate-x-[2px] hover:translate-y-[-2px] hover:[box-shadow:-8px_8px_0_0_#000] sm:min-w-[288px] sm:w-fit sm:px-8 sm:py-6 sm:text-2xl'

export const buttons = {
	primary: `${buttonBase} bg-gradient-to-tr from-pink to-pink hover:to-scarlet`,
	secondary: `${buttonBase} bg-olive hover:bg-blue`,
	gradient: `${buttonBase} bg-gradient-to-tr from-pink to-scarlet hover:from-scarlet`,
}

export const forms = {
	input:
		"p-4 rounded border-2 border-black bg-cream color-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-yellow placeholder-black/70 text-base disabled:text-black/20 disabled:cursor-not-allowed",
	label: "px-4",
	fieldset: "flex flex-col gap-2",
};



// export const typography = {
// 	h1: `${baseText} leading-tight text-3xl sm:text-5xl lg:text-6xl`,
// 	h2: `${baseText} leading-tight text-3xl sm:text-4xl xl:text-5xl`,
// 	h3: `${baseText} leading-tight text-2xl sm:text-3xl`,
// 	h4: `${baseText} leading-tight text-xl sm:text-2xl`,
// 	h5: `${baseText} leading-normal text-lg sm:text-xl`,
// 	h6: `${baseText} leading-normal text-base sm:text-lg`,

// 	bodyLarge: "text-lg font-light leading-snug lg:text-2xl",
// 	body: "text-base font-light leading-snug sm:text-lg",
// 	bodySmall: "text-base font-light leading-snug",

// 	link: "break-all font-medium underline",
// };
