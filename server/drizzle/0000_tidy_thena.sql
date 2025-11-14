CREATE TABLE `pic_to_seat_tables` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pic_id` int NOT NULL,
	`seat_table_id` int NOT NULL,
	`seat_number` int NOT NULL,
	CONSTRAINT `pic_to_seat_tables_id` PRIMARY KEY(`id`),
	CONSTRAINT `pic_to_seat_tables_pic_id_seat_table_id_unique` UNIQUE(`pic_id`,`seat_table_id`)
);
--> statement-breakpoint
CREATE TABLE `pics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`project_id` int NOT NULL,
	`seat_number` int,
	`profile_image` text,
	`is_deleted` boolean DEFAULT false,
	CONSTRAINT `pics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
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
	`table_name` varchar(255) NOT NULL,
	`description` text,
	`create_by` varchar(255) NOT NULL,
	`create_date` datetime DEFAULT now(),
	`is_deleted` boolean DEFAULT false,
	`project_id` int,
	CONSTRAINT `seat_tables_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`project_id` int NOT NULL,
	`pic_id` int,
	`create_date` datetime DEFAULT now(),
	`complete_date` datetime,
	`due_date` datetime,
	`is_deleted` boolean DEFAULT false,
	`status` enum('Backlog','In Progress','Completed','For Testing','Reject','Finished') NOT NULL DEFAULT 'Backlog',
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `pic_to_seat_tables` ADD CONSTRAINT `pic_to_seat_tables_pic_id_pics_id_fk` FOREIGN KEY (`pic_id`) REFERENCES `pics`(`id`) ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `pic_to_seat_tables` ADD CONSTRAINT `pic_to_seat_tables_seat_table_id_seat_tables_id_fk` FOREIGN KEY (`seat_table_id`) REFERENCES `seat_tables`(`id`) ON DELETE no action ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `pics` ADD CONSTRAINT `pics_project_id_projects_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `seat_tables` ADD CONSTRAINT `seat_tables_project_id_projects_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_project_id_projects_id_fk` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_pic_id_pics_id_fk` FOREIGN KEY (`pic_id`) REFERENCES `pics`(`id`) ON DELETE no action ON UPDATE no action;