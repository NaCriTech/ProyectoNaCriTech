CREATE SCHEMA IF NOT EXISTS `clientedDb` DEFAULT CHARACTER SET latin1 ;
USE `clientedDb` ;

CREATE TABLE IF NOT EXISTS `clientedDb`.`cliente` (
  `id_cliente` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(30) NULL DEFAULT NULL,
  `apellido` VARCHAR(30)NOT NULL,
  `email` VARCHAR(50) NULL DEFAULT NULL,
  `telefono` VARCHAR(10) NULL DEFAULT NULL,
  `soporte` VARCHAR(20) NULL DEFAULT NULL,
  `comentario` VARCHAR(50) NULL DEFAULT NULL,
 
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = latin1;
-------------------------------------------------------------------------