export interface Project {
	name: string;
	date: string;
	description: string;
	githubLink?: string;
	projectLink?: string;
}

export interface POAP {
	event: POAPEvent;
	tokenId: string;
	owner: string;
	chain: string;
	created: Date;
}

export interface POAPEvent {
	id: number;
	fancy_id: string;
	name: string;
	event_url: string;
	image_url: string;
	country: string;
	city: string;
	description: string;
	year: number;
	start_date: string;
	end_date: string;
	expiry_date: string;
	supply: number;
}