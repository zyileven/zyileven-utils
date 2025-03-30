// src/date.js
export function formatDate(timestamp: number): string {
    return new Date(timestamp).toISOString()
}