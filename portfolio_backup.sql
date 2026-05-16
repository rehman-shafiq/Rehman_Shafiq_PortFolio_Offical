SET FOREIGN_KEY_CHECKS = 0;

-- 1. Create migrations table
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `migration` VARCHAR(255) NOT NULL,
  `batch` INT NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `migrations` VALUES(1,'0001_01_01_000000_create_users_table',1);
INSERT INTO `migrations` VALUES(2,'0001_01_01_000001_create_cache_table',1);
INSERT INTO `migrations` VALUES(3,'0001_01_01_000002_create_jobs_table',1);

-- 2. Create users table
CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `email_verified_at` DATETIME NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(100) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Create password_reset_tokens table
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` VARCHAR(191) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Create sessions table
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` VARCHAR(191) NOT NULL,
  `user_id` BIGINT UNSIGNED NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` TEXT NULL,
  `payload` LONGTEXT NOT NULL,
  `last_activity` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `sessions` VALUES('jtVDsmuJ9Cf6pIfL90AD9TaguNQKPFBGhYmyjmxT',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0','eyJfdG9rZW4iOiIyZGhGUGJxUGRYd1lyUzlwRUQ2ZEJVZTdKVDlrUkdrZlNSc2wxRVZKIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAxIiwicm91dGUiOiJnZW5lcmF0ZWQ6Ok5sMlN6YUxrZFA2NlFacFQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==',1778779904);
INSERT INTO `sessions` VALUES('CIEME9M9cSy9FvfHvcx2gMPkp1H5Dj4YaKufPRsAyon8Tf',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36','eyJfdG9rZW4iOiJlS0E0c1QzZUlYUmFpV29zM2E5VFJpTWNOV1FRN016UGVWUURoNW10IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJnZW5lcmF0ZWQ6Ok5sMlN6YUxrZFA2NlFacFQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==',1778785147);
INSERT INTO `sessions` VALUES('n1qYqLYd9HYe2u1b9XAxNzJ3oqqoNKewg6i1kOHC',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36','eyJfdG9rZW4iOiJnMnphSHR0TVg2NGxYQ3U1azFJeDVmT1hoQllWTVNXSWV0c2dIS3dkIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJnZW5lcmF0ZWQ6Ok5sMlN6YUxrZFA2NlFacFQifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==',1778932242);

-- 5. Create cache table
CREATE TABLE IF NOT EXISTS `cache` (
  `key` VARCHAR(191) NOT NULL,
  `value` MEDIUMTEXT NOT NULL,
  `expiration` INT NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Create cache_locks table
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` VARCHAR(191) NOT NULL,
  `owner` VARCHAR(255) NOT NULL,
  `expiration` INT NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. Create jobs table
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` BIGINT AUTO_INCREMENT NOT NULL,
  `queue` VARCHAR(191) NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `attempts` TINYINT UNSIGNED NOT NULL,
  `reserved_at` INT UNSIGNED NULL,
  `available_at` INT UNSIGNED NOT NULL,
  `created_at` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. Create job_batches table
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` VARCHAR(191) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `total_jobs` INT NOT NULL,
  `pending_jobs` INT NOT NULL,
  `failed_jobs` INT NOT NULL,
  `failed_job_ids` LONGTEXT NOT NULL,
  `options` LONGTEXT NULL,
  `cancelled_at` INT NULL,
  `created_at` INT NOT NULL,
  `finished_at` INT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 9. Create failed_jobs table
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` BIGINT AUTO_INCREMENT NOT NULL,
  `uuid` VARCHAR(191) NOT NULL,
  `connection` TEXT NOT NULL,
  `queue` TEXT NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `exception` LONGTEXT NOT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
