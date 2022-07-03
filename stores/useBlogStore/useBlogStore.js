import create from "zustand";
import { devtools } from "zustand/middleware";

export const useBlogStore = create(
	devtools(set => ({
		fetchedBlogs: [{}],
		setFetchedBlogsFromServer: blogs =>
			set(s => ({
				fetchedBlogs: blogs,
			})),
	}))
);
