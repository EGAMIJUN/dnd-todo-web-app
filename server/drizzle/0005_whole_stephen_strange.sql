CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`project_name` varchar(255) NOT NULL,
	`description` text,
	`create_by` varchar(255) NOT NULL,
	`create_date` datetime DEFAULT now(),
	`is_deleted` boolean DEFAULT false,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `seat_tables` (
	`id` int AUTO_INCREMENT NOT NULL,
	`project_name` varchar(255) NOT NULL,
	`description` text,
	`create_by` varchar(255) NOT NULL,
	`create_date` datetime DEFAULT now(),
	`is_deleted` boolean DEFAULT false,
	`project_id` int,
	CONSTRAINT `seat_tables_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `pics` RENAME COLUMN `table_id` TO `seat_table_id`;--> statement-breakpoint
ALTER TABLE `pics` ADD `projectId` int NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` ADD `project_id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `seat_tables` ADD CONSTRAINT `seat_tables_project_id_projects_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pics` ADD CONSTRAINT `pics_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `pics` ADD CONSTRAINT `pics_seat_table_id_seat_tables_id_fk` FOREIGN KEY (`seat_table_id`) REFERENCES `seat_tables`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_project_id_projects_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;