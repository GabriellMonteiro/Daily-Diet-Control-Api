-- CreateTable
CREATE TABLE `Jogadores` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `idade` INTEGER NOT NULL,
    `posicao` VARCHAR(50) NOT NULL,
    `nacionalidade` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Times` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `anoFundacao` INTEGER NOT NULL,
    `pais` VARCHAR(50) NOT NULL,
    `tecnico` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partidas` (
    `id` VARCHAR(191) NOT NULL,
    `data` VARCHAR(50) NOT NULL,
    `local` VARCHAR(50) NOT NULL,
    `placar` VARCHAR(50) NOT NULL,
    `timeCasa` VARCHAR(50) NOT NULL,
    `timeVisitante` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_JogadoresToTimes` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_JogadoresToTimes_AB_unique`(`A`, `B`),
    INDEX `_JogadoresToTimes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_JogadoresToTimes` ADD CONSTRAINT `_JogadoresToTimes_A_fkey` FOREIGN KEY (`A`) REFERENCES `Jogadores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JogadoresToTimes` ADD CONSTRAINT `_JogadoresToTimes_B_fkey` FOREIGN KEY (`B`) REFERENCES `Times`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
