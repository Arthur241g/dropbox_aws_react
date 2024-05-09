/**
 * For section
 * @param {svg: any, value: string} Section 
 * @returns 
 */

export function Section ({svg, value}) {
    return <div>
        {svg}
        <span>{value}</span>
    </div>
}