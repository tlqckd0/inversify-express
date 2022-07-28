import { Router } from "express";

interface Controller{
    initRouter(): Router;
    addListener(): void;    
}

export { Controller}