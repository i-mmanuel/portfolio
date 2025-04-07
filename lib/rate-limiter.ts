// A simple in-memory rate limiter
// In production, you might want to use Redis or another persistent store

type RateLimitEntry = {
  count: number
  firstRequest: number
}

const rateLimits = new Map<string, RateLimitEntry>()

export function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const entry = rateLimits.get(identifier)

  if (!entry) {
    // First request from this identifier
    rateLimits.set(identifier, { count: 1, firstRequest: now })
    return true
  }

  // Check if the window has expired
  if (now - entry.firstRequest > windowMs) {
    // Reset the window
    rateLimits.set(identifier, { count: 1, firstRequest: now })
    return true
  }

  // Check if the rate limit is exceeded
  if (entry.count >= maxRequests) {
    return false
  }

  // Increment the counter
  entry.count += 1
  rateLimits.set(identifier, entry)
  return true
}

