// src/date.ts
function formatDate(timestamp: number): string {
    return new Date(timestamp).toISOString()
}

export default formatDate;