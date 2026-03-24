// src/utils/fetchProjects.ts
export interface Project {
  title: string;
  description: string;
  techstack: string;
  status: string;       // "Đã hoàn thành" | "Đang thực hiện"
  link_github: string;
  image: string;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://opensheet.elk.sh/${import.meta.env.PUBLIC_SHEET_ID}/project`
    );
    console.log(res);
    if (!res.ok) {
      console.error("Failed to fetch projects, status:", res.status);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
